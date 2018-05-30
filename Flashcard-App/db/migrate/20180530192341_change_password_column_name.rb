class ChangePasswordColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :hash_password, :password_digest

  end
end
