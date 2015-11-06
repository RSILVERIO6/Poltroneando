json.array!(@generos) do |genero|
  json.extract! genero, :id, :nome
  json.url genero_url(genero, format: :json)
end
