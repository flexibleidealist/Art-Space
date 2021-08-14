class ArtistsController < ApplicationController
  before_action :get_artist, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:verify]
  
  def index
    artists = Artist.all
    render json: artists, status: :ok
  end

  def show
    render json: @artist
  end

  def create
    artist = Artist.new(artist_signup_params)
    if artist.save
      token = create_token(artist.id)
      render json: {
        artist: artist.attributes.except("password_digest"),
        token: token,
      }, status: :created
    else 
      render json: artist.errors, status: :unprocessable_entity
    end
  end

  def update
    if @artist.update(artist_params)
      render json: @artist, status: :ok
    else 
      render json: artist.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @artist.destroy
      render json: "Deleted", status: :ok
    else
      render json: @artist.errors, status: 404
    end
  end

  def login
    artist = Artist.find_by(username: artist_signin_params[:username])
    if artist && artist.authenticate(artist_signin_params[:password])
      token = create_token(artist.id)
      render json: {
        artist: artist.attributes.except("password_digest"),
        token: token,
      }, status: :ok 
    else
      render json: { error: "unauthorized"}, status: :unauthorized
    end
  end

  def verify
    render json: @current_artist.attributes.except("password_digest"), status: :ok
  end

  private 

  def artist_signup_params
    params.require(:artist).permit(:name, :username, :email, :password, :artist_statement, :image_url)
  end

  def artist_signin_params
    params.require(:artist).permit(:username, :password)
  end

  def create_token(id)
    payload = {id: id, exp: 48.hours.from_now.to_i}
    JWT.encode(payload, SECRET_KEY)
  end

  def get_artist
    @artist = Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(:name, :email, :image_url, :artist_statement, :username, :password_digest)
  end
end
