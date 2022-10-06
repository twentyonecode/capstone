require 'rails_helper'

RSpec.describe Gym, type: :model do
  it "should validate gym_name" do

    user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
    gym = user.gyms.create(
      
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
    expect(gym.errors[:gym_name]).to_not be_empty
  end

  it "should validate store_code" do

    user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
    gym = user.gyms.create(
        gym_name: 'Body Tech',
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
    expect(gym.errors[:store_code]).to_not be_empty
  end

  it "should validate hours_of_operations" do

    user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
    gym = user.gyms.create(
        gym_name: 'Body Tech',
        store_code: '051',
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
    expect(gym.errors[:hours_of_operations]).to_not be_empty
  end

  it "should validate phone_number" do

    user = User.create email:"a@a.a" ,  password:"123456", password_confirmation:"123456"
    gym = user.gyms.create(
        gym_name: 'Body Tech',
        store_code: '051',
        hours_of_operations: 'string',
        features: "Sauna, Daycare, Yoga",
        street: '245 bodylane',
        city: "Pittsburg",
        state: "PA",
        email: "BodyTech051@bodytect.com",
        deal: "25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg"
    )
    expect(gym.errors[:phone_number]).to_not be_empty
  end

  it "should validate features" do
    user = User.create email:"a@a.a", password:"123456", password_confirmation:"123456"
    gym = user.gyms.create(
      gym_name: 'Body Tech',
      store_code: '051',
      hours_of_operations: 'string',
      phone_number: '875564036',
      street: '245 bodylane',
      city: "Pittsburg",
      state: "PA",
      email: "BodyTech051@bodytect.com",
      deal: "25% off supplements!!",
      deal_code: "BDYT0025",
      image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg"
    )
    expect(gym.errors[:features]).to_not be_empty
  end
end
