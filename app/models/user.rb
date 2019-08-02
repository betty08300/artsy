# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true 
    validates :email, :password_digest, :session_token, presence: true 
    validates :password, length: {minimum:6, allow_nil: true}

    
    has_many :products, 
        primary_key: :id,
        foreign_key: :user_id, 
        class_name: :Product 
        


    after_initialize :ensure_session_token
    attr_reader :password


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user 
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end 

    def self.generate_session_token
        SecureRandom.urlsafe_base64(10)
    end 

    def reset_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end 

    def ensure_session_token
        self.session_token ||=User.generate_session_token
    end 

end

