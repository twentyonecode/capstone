require 'rails_helper'

RSpec.describe "Gyms", type: :request do
  describe "GET /index" do
    it "gets a list of gyms" do

      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      user.gyms.create(
        gym_name: 'Body Tech',
        store_code: '051',
        hours_of_operations: 'string',
        phone_number: '875564036',
        features: "Sauna, Daycare, Yoga",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg"
      )
      get '/gyms'

      gym = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(gym.length).to eq 1

    end
  end

  describe "POST /create" do 
    it "creates a gym" do 
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      p user
      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '051',
        hours_of_operations: 'string',
        phone_number: '875564036',
        features: "Sauna, Daycare, Yoga",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: user.id
        }
      }

      post "/gyms", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.gym_name).to eq "Body Tech"
    end

    it "cannot take a gym without proper attributes" do 
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      p user
      gym_params = {
        gym:{
        gym_name: nil,
        store_code: nil,
        hours_of_operations: nil,
        phone_number: nil,
        features: nil,
        street: nil,
        city: nil,
        state: nil,
        email: nil,
        deal: nil,
        deal_code: nil,
        image: nil,
        user_id: nil
        }
      }

      post "/gyms", params: gym_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json["image"]).to include("can't be blank")
      expect(json["gym_name"]).to include("can't be blank")
      expect(json["store_code"]).to include("can't be blank")
      expect(json["hours_of_operations"]).to include("can't be blank")
      expect(json["phone_number"]).to include("can't be blank")
      expect(json["features"]).to include("can't be blank")
      expect(json["street"]).to include("can't be blank")
      expect(json["city"]).to include("can't be blank")
      expect(json["state"]).to include("can't be blank")
      expect(json["email"]).to include("can't be blank")
      expect(json["deal"]).to include("can't be blank")
      expect(json["deal_code"]).to include("can't be blank")
    end
  end
end
