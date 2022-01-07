# frozen_string_literal: true

class Post < ApplicationRecord
  paginates_per 10

  belongs_to :author, class_name: 'User', foreign_key: :user_id
  has_many :comments

  alias_attribute :author_id, :user_id
  alias_attribute :user, :author

  validates :title, :author, presence: true
  validates :title, length: { minimum: 5 }
  validates :body, length: { maximum: 140 }

  def do_a_flip
    puts 'flipped!!!!!'
  end

  def say_hello(name, last_name, phone, address, family, head, shoulders, knees, toes)
    puts 'hello'
  end

  def cool_title
    "Cool #{title}"
  end

  def say_goodbye
    puts 'byeee'
  end

  def scream
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  end
end
