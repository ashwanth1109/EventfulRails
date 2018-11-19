Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # USER ROUTES
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'

  # EVENT ROUTES
  get '/events', to: 'events#index'
  get '/events/:id', to: 'events#show'
  post '/events', to: 'events#create'
  delete '/events/:id', to: 'events#delete'
  put '/events/:id', to: 'events#update'

  # ATTENDEE ROUTES
end
