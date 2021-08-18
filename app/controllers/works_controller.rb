class WorksController < ApplicationController
  before_action :get_work, only: [:show, :update, :destroy]
    # before_action :authorize_request, only: [:update, :create, :destroy]

  def index
    works = Work.where(show_id: params[:show_id])
    render json: works, status: :ok
  end

  def show
    render json: @work, status: :ok
  end

  def create
    new_work = Work.new(work_params)
    if new_work.save
      render json: new_work, status: :ok
    else
      render json: new_work.errors, status: :unprocessable_entity
    end
  end

  def update
    if @work.update(work_params)
      render json: @work, status: :ok
    else 
      render json: @work.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @work.destroy
    render json: "Deleted", status: :ok
  end

  private

  def get_work
    @work = Work.find(params[:id])
  end

  def work_params
    params.require(:work).permit(:title, :year, :materials, :show_id, :image_url)
  end
end
