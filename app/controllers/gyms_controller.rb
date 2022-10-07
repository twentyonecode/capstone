class GymsController < ApplicationController

    def index
        gyms = Gym.all  
        render json: gyms
    end

    def create
        # makes a new instance in the db
        # check if what is being craeted is valid
        # return info about new instance in the db
        # if invalid it returns a 422
        
    end

    def update
        # updates the instance by :id using params, in the db
        # check if what is being updated is valid
        # return info about updated instance in the db
        # if invalid it returns a 422
    end

    def delete
        # deletes the instance by :id using params, in the db
        # check if instance was deleted 
        # if valid return 204
        # if invalid return 422
    end
        #private section of the class
        # STRONG PARAMS  

end

