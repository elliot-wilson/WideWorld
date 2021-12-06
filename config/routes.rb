Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :locations, only: [:create, :destroy, :update, :show, :index]
    resources :location_visits, only: [:create, :destroy]
    resources :location_wanna_visits, only: [:create, :destroy]
    resources :location_edits, only: [:create]
    resources :location_listings, only: [:create, :destroy]
    resources :user_location_lists, only: [:create, :show, :update, :destroy]
    resources :searches, only: :index
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"

  get "api/random_location", to: "api/locations#random"

  get "api/random_locations", to: "api/locations#random_locations"
end
