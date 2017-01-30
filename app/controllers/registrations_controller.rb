class RegistrationsController < ApplicationController
  def after_sign_up_path_for(resource)
    '/user'
  end
end
