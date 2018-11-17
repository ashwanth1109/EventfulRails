class UsersController < ApplicationController
    def index
        render json: {message: 'hello rails', status: 200}
    end
end