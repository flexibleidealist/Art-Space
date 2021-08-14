class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def authorize_request
    header = request.headers["Authorization"]
    token = header.split(" ").last if header
    begin
      payload = decode_token(token)[0]
      @current_artist = Artist.find(payload["id"])

    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e 
      render json: { errors: e.message }, status: :unauthorized
    end
  end

  private
  
  def decode_token token
    JWT.decode(token, SECRET_KEY)
  end
end
