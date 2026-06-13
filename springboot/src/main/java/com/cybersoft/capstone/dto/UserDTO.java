package com.cybersoft.capstone.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Integer id;
    private String email;
    private String name;
    private CartDTO cart;
}
