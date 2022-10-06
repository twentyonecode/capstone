class GymsController < ApplicationController
    def index
        gyms = Gym.all  
        render json: gyms
    end

    def create
    end

    def update
    end
end
