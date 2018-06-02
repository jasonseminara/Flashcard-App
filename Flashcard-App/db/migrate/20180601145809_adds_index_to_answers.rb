class AddsIndexToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_index :answers, [:instance_id, :question_id], unique: true
    add_index :instances, [:quiz_id, :user_id], unique: true
  end
end
