class Gym < ApplicationRecord
  belongs_to :user
  validates :gym_name, presence: true
end
