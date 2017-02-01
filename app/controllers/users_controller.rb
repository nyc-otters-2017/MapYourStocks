class UsersController < ApplicationController
  before_action :authenticate_user!, except: [:show]

  def show
    @user = User.find(params[:id])
  end

  def portfolios
    @user = current_user
    if @current_user
    end
  end



end
