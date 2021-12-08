# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :password_digest, :session_token, presence: true
    validates :username, :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token


    has_many :locations_authored,
        primary_key: :id,
        foreign_key: :initial_author_id,
        class_name: :Location

    has_many :location_visits, dependent: :destroy,
        primary_key: :id,
        foreign_key: :visitor_id,
        class_name: :LocationVisit

    has_many :visited_locations,
        through: :location_visits,
        source: :location

    has_many :location_wanna_visits, dependent: :destroy,
        primary_key: :id,
        foreign_key: :wanna_visitor_id,
        class_name: :LocationWannaVisit

    has_many :wanna_visit_locations,
        through: :location_wanna_visits,
        source: :location

    has_many :edits, dependent: :destroy,
        primary_key: :id,
        foreign_key: :editor_id,
        class_name: :LocationEdit

    has_many :edited_locations,
        through: :edits,
        source: :location

    has_many :location_lists, dependent: :destroy,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :UserLocationList

    has_one_attached :photo

    
    #FIGVAPER

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            return @user
        else
            return nil
        end
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end



end
