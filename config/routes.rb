Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  
  resources :shows
  resources :works, only: [:show, :create, :update, :destroy]


  get "artists/verify", to: "artists#verify"
  post "artists/login", to: "artists#login"
  resources :artists, only: [:show, :create, :update, :destroy]
  
end
