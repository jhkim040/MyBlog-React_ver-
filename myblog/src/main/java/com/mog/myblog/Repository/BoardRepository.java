package com.mog.myblog.Repository;

import com.mog.myblog.Entitiy.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
    List<Board> findByTitleContaining(String searchKeyword);
}
