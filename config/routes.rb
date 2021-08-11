Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :artists do 
    resources :shows do
      resources :works
    end
  end
end
