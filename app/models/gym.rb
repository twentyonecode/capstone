class Gym < ApplicationRecord
  belongs_to :user
  validates :gym_name, :store_code, :hours_of_operations, :phone_number, :features, presence: true
end
