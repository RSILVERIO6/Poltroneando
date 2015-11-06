class GenerosFilmesController < ApplicationController
  before_action :set_generos_filme, only: [:show, :edit, :update, :destroy]

  # GET /generos_filmes
  # GET /generos_filmes.json
  def index
    @generos_filmes = GenerosFilme.all
  end

  # GET /generos_filmes/1
  # GET /generos_filmes/1.json
  def show
  end

  # GET /generos_filmes/new
  def new
    @generos_filme = GenerosFilme.new
  end

  # GET /generos_filmes/1/edit
  def edit
  end

  # POST /generos_filmes
  # POST /generos_filmes.json
  def create
    @generos_filme = GenerosFilme.new(generos_filme_params)

    respond_to do |format|
      if @generos_filme.save
        format.html { redirect_to @generos_filme, notice: 'Generos filme was successfully created.' }
        format.json { render :show, status: :created, location: @generos_filme }
      else
        format.html { render :new }
        format.json { render json: @generos_filme.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /generos_filmes/1
  # PATCH/PUT /generos_filmes/1.json
  def update
    respond_to do |format|
      if @generos_filme.update(generos_filme_params)
        format.html { redirect_to @generos_filme, notice: 'Generos filme was successfully updated.' }
        format.json { render :show, status: :ok, location: @generos_filme }
      else
        format.html { render :edit }
        format.json { render json: @generos_filme.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /generos_filmes/1
  # DELETE /generos_filmes/1.json
  def destroy
    @generos_filme.destroy
    respond_to do |format|
      format.html { redirect_to generos_filmes_url, notice: 'Generos filme was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_generos_filme
      @generos_filme = GenerosFilme.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def generos_filme_params
      params.require(:generos_filme).permit(:genero, :filme)
    end
end
