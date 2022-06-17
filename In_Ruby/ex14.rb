# logika
def uchta_son(x,y,z)
    if x >= 20 && x < y || x < z
        return x
    elsif y >= 20 && y < x || y < z
        return y
    elsif z >= 20 && z < x || z < y
        return z
    end
end

puts uchta_son(15,54,49)