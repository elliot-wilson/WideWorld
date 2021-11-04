Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :locations, only: [:create, :destroy, :update, :show, :index]
    resources :location_visits, only: [:create, :destroy]
    resources :location_wanna_visits, only: [:create, :destroy]
    resources :location_edits, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
