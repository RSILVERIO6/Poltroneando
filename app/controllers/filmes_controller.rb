class FilmesController < ApplicationController
  before_action :set_filme, only: [:show, :edit, :update, :destroy]

  # GET /filmes
  # GET /filmes.json
  def index
    @filmes = Filme.all
  end

  # GET /filmes/1
  # GET /filmes/1.json
  def show
  end

  # GET /filmes/new
  def new
    @filme = Filme.new
  end

  # GET /filmes/1/edit
  def edit
  end

  # POST /filmes
  # POST /filmes.json
  def create
    @filme = Filme.new(filme_params)

    respond_to do |format|
      if @filme.save
        format.html { redirect_to @filme, notice: 'Filme was successfully created.' }
        format.json { render :show, status: :created, location: @filme }
      else
        format.html { render :new }
        format.json { render json: @filme.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /filmes/1
  # PATCH/PUT /filmes/1.json
  def update
    respond_to do |format|
      if @filme.update(filme_params)
        format.html { redirect_to @filme, notice: 'Filme was successfully updated.' }
        format.json { render :show, status: :ok, location: @filme }
      else
        format.html { render :edit }
        format.json { render json: @filme.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /filmes/1
  # DELETE /filmes/1.json
  def destroy
    @filme.destroy
    respond_to do |format|
      format.html { redirect_to filmes_url, notice: 'Filme was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_filme
      @filme = Filme.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def filme_params
      params.require(:filme).permit(:titulo, :ano, :sinopse, :duracao)
    end
end
