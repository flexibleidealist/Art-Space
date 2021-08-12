Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :artists do 
    resources :shows do
      resources :works
    end
  end

  resources :artists, only: [:create]
  post "artists/login", to: "artists#login"
  get "artists/verify", to: "artists#verify"
end
