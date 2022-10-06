class GymsController < ApplicationController
    def index
        gyms = Gym.All  
        render json: gyms
    end
end
