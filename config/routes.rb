Rails.application.routes.draw do
  resources :gyms
  devise_for :users
  get '*path', to: 'gym#index', constraints: ->(request){ request.format.html? }
 root 'gym#index'
end
