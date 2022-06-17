# Logika orqaliy yechganda.
def ohirgi_r(x, y, z)
    if x > 0 && y > 0 && z > 0
        x % 10 == y % 10 && y % 10 == z % 10
    end
end
  
  # Oson yo'l bilan yechgan.
def ohirgi_r_2(x, y, z)
    if x > 0 && y > 0 && z > 0
        [x, y, z].map { |i| i % 10 }.uniq.size == 1
    end
end

puts ohirgi_r(15, 25, 35)
puts ohirgi_r_2(15, 25, 35)