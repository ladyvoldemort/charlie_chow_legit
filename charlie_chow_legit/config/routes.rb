Rails.application.routes.draw do
  get 'shopping_cart/has_many:'
  get 'shopping_cart/items'
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
    resources :items
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
