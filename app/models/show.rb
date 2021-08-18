class Show < ApplicationRecord
  belongs_to :artist
  has_many :works, dependent: :destroy
end
