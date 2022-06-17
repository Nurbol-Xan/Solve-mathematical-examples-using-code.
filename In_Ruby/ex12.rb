# rejim
def rejim(x, y, z)
  if x < y && y < z
    return "Qattiq rejim"
  elsif x <= y && y <= z
    return "Yumshoq rejim"
  else
    return "Bu hato"
  end
end

puts rejim(10, 15, 31)