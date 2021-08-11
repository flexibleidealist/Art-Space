class ArtistsController < ApplicationController
  before_action :get_artist, only: [:show, :update, :destroy]
  
  def index
    artists = Artist.all
    render json: artists, status: :ok
  end

  def show
    render json: @artist
  end

  def create
    new_artist = Artist.new(artist_params)
    if new_artist.save
      render json: new_artist, status: :created 
    else 
      render json: new_artist.errors, status: :unprocessable_entity
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

  private 

  def get_artist
    @artist = Artist.find(params[:id])
  end


  def artist_params
    params.require(:artist).permit(:name, :email, :image_url, :artist_statement, :username, :password_digest)
  end
end
