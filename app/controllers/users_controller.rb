class UsersController < ApplicationController
    def index
        render json: {message: 'hi'}
    end
end