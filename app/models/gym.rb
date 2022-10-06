class Gym < ApplicationRecord
  belongs_to :user
  validates :gym_name, :store_code, presence: true
end
