class Artist < ApplicationRecord
  has_one :show
  has_secure_password
  validates :username, :password, presence: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 6}
end
