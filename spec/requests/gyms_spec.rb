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
      gym = Gym.first #gym on line 24 was JSON, had to reassign to ActiveRecord Query
      expect(gym.gym_name).to be_a(String)
      expect(gym.store_code).to be_a(String)
      expect(gym.hours_of_operations).to be_a(String)
      expect(gym.phone_number).to be_a(String)
      expect(gym.features).to be_a(String)
      expect(gym.street).to be_a(String)
      expect(gym.city).to be_a(String)
      expect(gym.state).to be_a(String)
      expect(gym.email).to be_a(String)
      expect(gym.deal).to be_a(String)
      expect(gym.deal_code).to be_a(String)
      expect(gym.image).to be_a(String)

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

    it "cannot create a gym without proper attributes" do 
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

  describe "PATCH /update" do 
    it "updates a gym" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Fit',
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

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.gym_name).to eq "Body Fit"
    end

    it "updates a gym store_code" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
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

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.store_code).to eq '000'
    end
    it "updates a gym hours_of_operations" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'strings',
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

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.hours_of_operations).to eq 'strings'
    end

    it "updates a gym phone_number" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
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

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.phone_number).to eq '9495664036'
    end

    it "updates a gym features" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
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

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.features).to eq "Sauna, Daycare,"
    end

    it "updates a gym street" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
        street: 'bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: user.id
        }
      }

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.street).to eq "bodylane"
    end
    it "updates a gym city" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
        street: '245 bodylane',
        city: "Pitts",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: user.id
        }
      }

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.city).to eq "Pitts"
    end
    it "updates a gym state" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "CA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: user.id
        }
      }

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.state).to eq "CA"
    end

    it "updates a gym email" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "string",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: user.id
        }
      }

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.email).to eq "string"
    end
    it "updates a gym deal" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "updated deal",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: user.id
        }
      }

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.deal).to eq "updated deal"
    end

    it "updates a gym deal_code" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "updated deal code",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: user.id
        }
      }

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.deal_code).to eq "updated deal code"
    end
    it "updates a gym features" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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

      gym_params = {
        gym:{
        gym_name: 'Body Tech',
        store_code: '000',
        hours_of_operations: 'string',
        phone_number: '9495664036',
        features: "Sauna, Daycare,",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "new image link",
        user_id: user.id
        }
      }

      patch "/gyms/#{gym.id}", params: gym_params
      expect(response).to have_http_status(200)
      gym = Gym.first
      expect(gym.image).to eq "new image link"
    end

    it "cannot update a gym without proper attributes" do 
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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
      patch "/gyms/#{gym.id}", params: gym_params
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

  describe "DELETE /destroy" do 
    it "deletes a gym" do
      user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
      gym = user.gyms.create(
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


      # gym = Gym.first
      delete "/gyms/#{gym.id}"
      expect(response.status).to eq (204)
      gym = Gym.all
      expect(gym).to be_empty 
    end
  end  
end

