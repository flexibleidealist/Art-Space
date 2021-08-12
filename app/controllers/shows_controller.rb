class ShowsController < ApplicationController
  before_action :get_show, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:update, :create, :destroy]
  
  def index
    shows = Show.where(artist_id: params[:artist_id])
    render json: shows, status: :ok
  end

  def show
    render json: @show, status: :ok
  end

  def create
    new_show = Show.new(show_params)
    if new_show.save
      render json: new_show, status: :created
    else
      render json: new_show.errors, status: :unprocessable_entity
    end
  end

  def update
    if @show.update(show_params)
      render json: @show, status: :ok
    else 
      render json: @show.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @show.destroy
    render json: "Deleted", status: :ok
  end



  private

  def get_show
    @show = Show.find(params[:id])
  end

  def show_params
    params.require(:show).permit(:title, :description, :image_url, :artist_id)
  end

end
