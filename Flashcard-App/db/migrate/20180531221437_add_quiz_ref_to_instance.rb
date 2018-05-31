class AddQuizRefToInstance < ActiveRecord::Migration[5.2]
  def change
      add_reference :instances, :quiz, index: true

  end
end
