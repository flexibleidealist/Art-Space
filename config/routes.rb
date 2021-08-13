Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  
  resources :shows
  resources :works, only: [:show, :create, :update, :destroy]


  resources :artists, only: [:create, :update, :destroy]
  post "artists/login", to: "artists#login"
  get "artists/verify", to: "artists#verify"

end
