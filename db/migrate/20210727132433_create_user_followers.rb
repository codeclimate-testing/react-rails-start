# frozen_string_literal: true

class CreateUserFollowers < ActiveRecord::Migration[6.1]
  def change
    create_table :user_followers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :follower, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
