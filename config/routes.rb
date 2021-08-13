Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  
    resources :shows do
      resources :works
    end

  resources :artists, only: [:create, :update, :destroy]
  post "artists/login", to: "artists#login"
  get "artists/verify", to: "artists#verify"

  # get "/all-shows", to: "shows#get_all_shows"
end
