class SavedInterestsController < ApplicationController
  # before_action :set_saved_interest, only: [:show, :update, :destroy]

  # GET /saved_interests
  def index
    @saved_interests = SavedInterest.all

    render json: @saved_interests
  end

  # GET /saved_interests/1
  def show
    render json: @saved_interest
  end

  # POST /saved_interests
  def create
    @saved_interest = SavedInterest.new(saved_interest_params)
    @saved_interest.save!
    if @saved_interest.save
      render json: @saved_interest, status: :created, location: @saved_interest
    else
      render json: @saved_interest.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /saved_interests/1
  def update
    if @saved_interest.update(saved_interest_params)
      render json: @saved_interest
    else
      render json: @saved_interest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /saved_interests/1
  def destroy
    @saved_interest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_saved_interest
      @saved_interest = SavedInterest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def saved_interest_params
      params.fetch(:saved_interest, {})
    end
end
