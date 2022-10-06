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
      p Gym.first
      get '/gyms'

      gym = JSON.parse(response.body)
      p gym

      expect(response).to have_http_status(200)
      expect(gym.length).to eq 1

    end
  end
end
