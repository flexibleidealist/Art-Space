class Artist < ApplicationRecord
  has_secure_password
  has_one :shows
  validates :username, :password, presence: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 6}
end
