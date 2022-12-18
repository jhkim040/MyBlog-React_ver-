package com.mog.myblog.Service;

import com.mog.myblog.Entitiy.Board;
import com.mog.myblog.Entitiy.Category;
import com.mog.myblog.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> categoryList() {
        return categoryRepository.findAll();
    }

    public void write(Category category) {
        categoryRepository.save(category);
    }
}
