class Gym < ApplicationRecord
  belongs_to :user
  validates :gym_name, :store_code, :hours_of_operations, :phone_number, :features, :street, :city, :state, :email, :deal, :deal_code, :image, presence: true
end
