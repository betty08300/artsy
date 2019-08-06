Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :products, only: [:create, :update, :destroy, :index, :show]
    resource :user, only: [:create]
    resource :shopping_cart, only: [:index, :create, :update, :destroy]
  end

  root to: "static_pages#root"
end
