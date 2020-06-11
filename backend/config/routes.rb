Rails.application.routes.draw do
  scope '/api' do
    post 'user_token' => 'user_token#create'
    post '/users' => 'users#create'
    resources :users
    resources :countries
    resources :interests
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
end
