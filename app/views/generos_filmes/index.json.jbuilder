json.array!(@generos_filmes) do |generos_filme|
  json.extract! generos_filme, :id, :genero, :filme
  json.url generos_filme_url(generos_filme, format: :json)
end
