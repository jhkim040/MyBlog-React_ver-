package com.mog.myblog.Controller;

import com.mog.myblog.Entitiy.Board;
import com.mog.myblog.Entitiy.Category;
import com.mog.myblog.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/category/list")
    public List<Category> categoryList() {
        return categoryService.categoryList();
    }

    @PostMapping("/category/insert")
    public void categoryInsert(@RequestBody Category category) {
        categoryService.write(category);
    }
}
