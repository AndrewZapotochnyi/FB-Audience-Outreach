Rails.application.routes.draw do
  resources :saved_interests
  resources :countries
  resources :interests
  scope '/api' do
    post 'user_token' => 'user_token#create'
    post '/users' => 'users#create'
    resources :users
    
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
end
